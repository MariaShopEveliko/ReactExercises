export default function Section({ title, children, ...remainingProps }) {
    return (
        <section {...remainingProps}>
            <h2>{title}</h2>
            {children}
        </section>)
}