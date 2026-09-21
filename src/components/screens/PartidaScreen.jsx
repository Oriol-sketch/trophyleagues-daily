import { useEffect, useRef } from "react";
import { getGameModule } from "../../../games/registry.js";
import "./LightScreens.css";

export function PartidaScreen({ meta, onSubmit, onMissing }) {
  const mountRef = useRef(null);
  const submitRef = useRef(onSubmit);
  submitRef.current = onSubmit;

  useEffect(() => {
    if (!meta) {
      onMissing();
      return undefined;
    }
    const node = mountRef.current;
    const game = getGameModule(meta);
    game.start();
    const action = game.render(node);
    const handle = () => submitRef.current(game);
    action.addEventListener("click", handle);
    return () => {
      action.removeEventListener("click", handle);
      if (node) node.innerHTML = "";
    };
  }, [meta, onMissing]);

  return (
    <section className="screen light">
      <header className="light-head">
        <h1>{meta ? meta.title : "Partida"}</h1>
      </header>
      <div className="bar" style={{ margin: "12px 0 16px" }}>
        <span style={{ width: "35%" }} />
      </div>
      <div ref={mountRef} />
    </section>
  );
}
