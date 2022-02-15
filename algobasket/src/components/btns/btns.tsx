const Btns = () => {
     //now create button list 

     const btn:any[] = [
         {
                name: 'Get Started',
         },{
             name:'Learn More',
         },
         {
                name:'View All',
         },
         {
                name:'View All',
         },
         {
                name:'View All',
         }
         ,
         {
                name:'View All',
         },
         {
                name:'View All',
         },
         {
                name:'View All',
         },
         {
                name:'View All',
         }
    ]


    return (
        <>
            {/* now mapp through the btns */}
            {
                btn.map((btn:any, index:number)=>{
                    return(
                        <button key={index} className="mt-3 btn btn-default ml-3">
                            {btn.name}
                        </button>
                    )
                }
                )
    }
            
        </>
    )

}

export default Btns;