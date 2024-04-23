import { Categories } from "./Categories";
import { ProductField } from "./ProductField";
import { ProductLable } from "./ProductLable";



export const ProductForm = () => {
    return <form action="" className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-medium">Створи оголошення</h1>
        <ProductLable inputName="Назва товару" >
            <ProductField type="text" id="productName" />
        </ProductLable>
        <ProductLable inputName="Категорія товару">
            <Categories />
        </ProductLable>
        <ProductLable inputName="Ціна за 1 одиницю товару">
            <ProductField type='number' />

        </ProductLable>
        <ProductLable inputName="Опис товару">
            <textarea className="bg-transparent border border-formColor rounded-2xl" name="" id="" cols={30} rows={10}></textarea>
        </ProductLable>

        <div><h3>Контактні дані</h3>
            <ProductLable inputName="Контактна особа" className="text-xs">
                <ProductField type='text' />

            </ProductLable>
            <ProductLable inputName="Номер телефону" className="text-xs">
                <ProductField type='number' />

            </ProductLable>
            <ProductLable inputName="Ел. пошта" className="text-xs">
                <ProductField type='mail' />

            </ProductLable>
            <ProductLable inputName="Місцезнаходження товару" className="text-xs">
                <ProductField type='text' />

            </ProductLable></div>

        <button type="submit" className="text-center text-white py-3 px-7 min-w-[140px] rounded-xl bg-eggPlant hover:bg-eggPlant focus:bg-eggPlant ">Опублікувати</button>
    </form>

}