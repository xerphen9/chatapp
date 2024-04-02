import classNames from 'classnames'

const Button = ({children, className, ...rest}) => {
    const clsx = classNames(`btn rounded-full`, className)

    return (
        <button {...rest} className={clsx}>{children}</button>
    )
}

export default Button;