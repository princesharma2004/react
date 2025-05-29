function ChangeColorButton(color, setColor)
{
    setColor(color);
}

export default function Button(props) {
  return (
      <button style={{ backgroundColor: props.color, color: "black"}} onClick={() => ChangeColorButton(props.color, props.setColor)}>{props.color}</button>
  );
}
