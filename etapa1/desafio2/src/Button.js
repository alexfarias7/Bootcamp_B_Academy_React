function Button ({kind, children}){
    return (
        <>
        <button className={kind} type="submit">
            {children}
        </button>
        </>
    )
}

export {Button}