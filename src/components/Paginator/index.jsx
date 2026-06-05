import { Container,ContainerPaginator,List,Button } from "./paginator.style"
import productsStore from "../../state/useProductStore"
import { useMemo } from "react"
const Paginator = () => {
    const{totalPages,goToPage, nextPage, prevPage,currentPage} =productsStore()
    
   const pages = useMemo(() => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return pages
    }, [totalPages])
    
    return(
        <Container>
            <ContainerPaginator>
                <List> 
            {pages.map((page) => (
                <Button
                        key={page}
                        onClick={() => goToPage(page)}
                        disabled={page === currentPage}
                        >
                    {page}
                </Button>
            ))}
            </List>
            </ContainerPaginator>
        </Container>
    )
}
export default Paginator