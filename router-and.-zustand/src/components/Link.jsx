import { Link as NavLink } from "react-router";

export function Link({ href, children, ...retOfProps }) {    
    return (
        <NavLink to={href} {...retOfProps}>
            {children}
        </NavLink>
    )
}