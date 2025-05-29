import Button from "./Button";

export default function NevBar(props) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
      <div className="inline-flex bg-gray-900 rounded-full px-4 py-2 shadow-lg" style={{backgroundColor:"offwhite", backdropFilter: "blur(10px)" }}>

        <Button color="gold" setColor={props.setColor} className="mx-2" />
        <Button color="crimson" setColor={props.setColor} className="mx-2" />
        <Button color="teal" setColor={props.setColor} className="mx-2" />
        <Button color="indigo" setColor={props.setColor} className="mx-2" />
        <Button color="tomato" setColor={props.setColor} className="mx-2" />
        <Button color="aqua" setColor={props.setColor} className="mx-2" />
        <Button color="coral" setColor={props.setColor} className="mx-2" />
        <Button color="lavender" setColor={props.setColor} className="mx-2" />

      </div>
    </nav>
  );
}
