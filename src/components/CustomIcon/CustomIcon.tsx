interface Props {
  src: string;
  className?: string;
}
export default function (props: Props) {
  return <img src={props.src} className={props.className || "w-5 h-5"} />;
}
