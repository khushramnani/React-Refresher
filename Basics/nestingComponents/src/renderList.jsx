const products = [
    {title:"Apple" , isfruit:true , id:1  },
    {title:"orange" , isfruit:true , id:2  },
    {title:"grape" , isfruit:true , id:3  },
    {title:"tiger" , isfruit:false , id:4  }
]

const RenderList= ()=>{
    const listitems = products.map(product => 

        <>
        <li key={product.id} 
        style={{color:product.isfruit ? "green" : "red"}}

        >{product.title}</li>
        </>
    )
    return(
        <>
        <ul>{listitems}</ul>
        </>
    )
}

export default RenderList