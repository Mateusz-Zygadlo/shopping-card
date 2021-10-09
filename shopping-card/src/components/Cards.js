import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
    const productsArr = [
        {name: 'Huawei', price: 599, amount: 1,  description: 'Huawei Technologies is a Chinese multinational technology corporation headquartered in Shenzhen, Guangdong, China. It designs, develops, and sells telecommunications equipment and consumer electronics.'},
        {name: 'Xiaomi', price: 449, amount: 1, description: 'Xiaomi Corporation registered in Asia as Xiaomi Inc., is a Chinese designer and manufacturer of consumer electronics and related software, home appliances, and household items.'},
        {name: 'Apple', price: 3999, amount: 1, description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world s largest technology company by revenue (totaling $274.5 billion in 2020) and, since January 2021, the world s most valuable company.'},
        {name: 'Samsung', price: 2799, amount: 1, description: 'The Samsung Group is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate).'},
        {name: 'Motorola', price: 1299, amount: 1, description: 'Motorola, Inc. was an American multinational telecommunications company based in Schaumburg, Illinois, United States. After having lost $4.3 billion from 2007 to 2009, the company split into two independent public companies, Motorola Mobility and Motorola Solutions on January 4, 2011.'},
        {name: 'OnePlus', price: 3399, amount: 1, description: 'OnePlus Technology is a Chinese consumer electronics manufacturer headquartered in Shenzhen, Guangdong province, in the Tairan Building at the Chegong Temple (车公庙) subdistrict of Futian District. It was founded by Pete Lau and Carl Pei in December 2013, and is currently majority-owned by Oppo as its only shareholder, which is a subsidiary of BBK Electronics along with Vivo, Realme and iQOO.'},
        {name: 'realme', price: 399, amount: 1, description: 'Realme (stylized as realme) is a Chinese smartphone manufacturer that is a subsidiary of BBK Electronics. It was founded by Sky Li (Li Bingzhong) on May 4, 2018, who was former vice president of Oppo and the head of Oppo India. It was a spin-off from Oppo which was collectively owned by Oppo Electronics.'},
        {name: 'nokia', price: 549, amount: 1, description: 'Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics company, founded in 1865. Nokia s main headquarters are in Espoo, Finland, in the greater Helsinki metropolitan area, but the company s actual roots are in the Tampere region of Pirkanmaa. In 2020, Nokia employed approximately 92,000 people across over 100 countries, did business in more than 130 countries, and reported annual revenues of around €23 billion.'},
        {name: 'Oppo', price: 729, amount: 1, description: 'Guangdong Oppo Mobile Telecommunications Corp., Ltd, doing business as OPPO, is a Chinese consumer electronics and mobile communications company headquartered in Dongguan, Guangdong. Its major product lines include smartphones, smart devices, audio devices, power banks, and other electronic products.'},
        {name: 'Asus', price: 479, amount: 1, description: 'ASUSTek Computer Inc. is a Taiwanese multinational computer and phone hardware and electronics company headquartered in Beitou District, Taipei, Taiwan. Its products include desktop computers, laptops, netbooks, mobile phones, networking equipment, monitors, wi-fi routers, projectors, motherboards, graphics cards, optical storage, multimedia products, peripherals, wearables, servers, workstations, and tablet PCs.'},
    ];

    const [shoppingProducts, setShoppingProducts] = useState(props.productsArrProps || []);

    useEffect(() => {
        props.addProductFunc([...shoppingProducts]);

    }, [shoppingProducts])

    
    const setValue = (e) => {
        const value = e.target.parentElement.parentElement.classList[0];
        const indexValue = productsArr.findIndex(item => item.name == value);

        for(let key in shoppingProducts){
            if(shoppingProducts[key].name == productsArr[indexValue].name){
                let newArr = [...shoppingProducts];
                newArr[key].amount += 1;
                
                setShoppingProducts(newArr);

                return; 
            }
        }

        setShoppingProducts(shoppingProducts.concat(productsArr[indexValue]));

        return;
    }

    return(
        <div>
            <h1 className="ProductsH1">Products</h1>
            <div className="containerCards">
                {productsArr.map((item, i) => (
                    <div key={i} className={`${item.name} card`}>
                        <div className="productImg"></div>
                        <div className="productName">
                            <Link to={`/products/${item.name}`}>{item.name}</Link>
                        </div>
                        <div className="productPrice">{item.price}$</div>
                        <div className="productButton">
                            <button onClick={(e)=>{setValue(e)}}>Add to shopping cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;