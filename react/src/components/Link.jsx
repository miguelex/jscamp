import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...retOfProps }) {
    const { navigateTo } = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(href);
    }
    
    return (
        <a href={href} {...retOfProps} onClick={handleClick}>
            {children}
        </a>
    )
}