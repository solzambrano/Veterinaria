
import Loader from '../Spinner';
import Arrow from '../../assets/icons/arrow-up.svg'

import {Sumary,Detail,Subparagraph,Image,Item,Unorder} from './detail.style'
const DetailInfo = ({entry, isLoading}) => {    
    return(
    <>
    {isLoading ?  (
        <Loader/>
    )
    :(
        entry?.map((item, index) => {
            return(
                <Item>
                   <Detail>
                        <Sumary>{item?.title}<Image src={Arrow}></Image></Sumary>
                            <Subparagraph>{item?.subtitle}</Subparagraph>
                            {item?.items?.length >0 && (
                                <Unorder>
                                    {item.items.map((item, index) => (
                                        <Item key={index}>{item}</Item>
                                        ))}
                                </Unorder>
                            ) }
                    </Detail>
                </Item>
            )
        })
    )
    }
    </>
    )
}
export default DetailInfo