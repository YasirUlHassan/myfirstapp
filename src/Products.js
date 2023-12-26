
import Product from './Product';

export default function Products() {
    let products = [
        { id: 1, name: "Levis Jeans", price: "Price 50$", url: "https://dimg.dillards.com/is/image/DillardsZoom/mainProduct/levis-western-fit-straight-leg-jeans/00000000_zi_1cb1aacd-de35-4634-a702-a59506942564.jpg" },
        { id: 2, name: "Levis Shirts", price: "Price 40$", url: "https://i.pinimg.com/originals/bf/1b/79/bf1b7929866dde699083ec34a2c8c3ba.jpg" },
        { id: 3, name: "Levis Sweater", price: "Price 60$", url: "https://th.bing.com/th/id/OIP._taOpD_ql5Mn0aDoD7tRFwAAAA?rs=1&pid=ImgDetMain" },
    ]

    return (
        <div className="products">
            {
                products.map((product) => {
                    return (
                        <Product name={product.name} price={product.price} url={product.url} key={product.id}></Product>
                    )
                })
            }
        </div>
    )
}