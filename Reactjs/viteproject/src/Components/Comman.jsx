export const ComponyName="Tops Tech"

export const Details = (props)=>{
    return(
        <>
           <h3>-Artical by:{props.owner.name}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores et, animi earum ut, non nisi repellendus quis nesciunt molestias dolores in rem necessitatibus quo eos sequi exercitationem temporibus aut.</p>
            <p>Created At:{props.owner['created At']}</p>
            <p>Category:{props.owner.type}</p>
        </>
    )
}