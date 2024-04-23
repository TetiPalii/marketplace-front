export const ProductField = ({ type, list }: { type?: string, id?: string, list?: string }) => {
    return <input type={type} className="bg-transparent border border-formColor rounded-2xl h-[36px] px-2 py-3" list={list} />

}