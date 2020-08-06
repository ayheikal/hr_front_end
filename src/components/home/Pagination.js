import React,{useContext} from 'react'
import PositionsContext from '../../context/positions/positionsContext';
// const onClick=(number)=>{
//     useContext(PositionsContext).getPositionsBypage(number);

// }
export default function Pagination({numberOfPages}) {
const positionsContext=useContext(PositionsContext)

   const pageNumbers=[]
   for(let i=0;i<positionsContext.numberOfPages;i++)
   {
       pageNumbers.push(i+1);
   }
   
   
    const getPositionByPageNumber=(newCurrentNumberOfPage)=>{
        positionsContext.getPositionsBypage(newCurrentNumberOfPage,positionsContext.numberOfPages)

    }
  
   
    
        return(
        <nav className='center'>
            <ul className='pagination'>
                {
                    pageNumbers.map(number=>(
                        <li key={number}className='page-item'>
                            
                        <button  type='button' value={number} onClick={(e)=>getPositionByPageNumber(number)} className='page-link'>{number}</button>
                        </li>
                    ))
                }
               
            </ul>

        </nav>
        )
    }

  

