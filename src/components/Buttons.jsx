export default function Button({
    className,
    onClick,
    value
}) {
    return (
        <button className={className} onClick={onClick}>{value}</button>
    );
};