import { UseFormRegisterReturn} from 'react-hook-form';

type RegisterFunction = UseFormRegisterReturn<string>;

interface ComponentProps {
    register?: RegisterFunction;
    type?: string,
    id?: string,
    list?: string,
  }
export const Condition : React.FC<ComponentProps> =
  ({register}) => {
    return (
      <>
        <ul className="flex gap-x-4 justify-center mt-4 mb-4 w-full">
          <li className="w-full">
            <input
              type="radio"
              id="used"
              name="condition"
              value="used"
              className="peer hidden"
              required
              {...register}
              onChange={e => {
                console.log(
                  e
                    .target
                    .checked
                );
              }}
            />
            <label
              htmlFor="used"
              className="block text-center py-3 px-16 bg-transparent border border-eggPlant rounded-xl 
              cursor-pointer peer-checked:bg-eggPlant peer-checked:text-white">
              Вживане
            </label>
          </li>
          <li className="w-full">
            <input
              {...register}
              type="radio"
              id="new"
              name="condition"
              value="new"
              className="peer hidden"
              onChange={e => {
                console.log(
                  e
                    .target
                    .checked
                );
              }}
            />
            <label
              htmlFor="new"
              className="py-3 px-16 text-center block bg-transparent border border-eggPlant 
              rounded-xl cursor-pointer
               peer-checked:bg-eggPlant peer-checked:text-white">
              Нове
            </label>
          </li>
        </ul>
      </>
    );
  };
// {/* <ul className="flex gap-4 justify-center mt-4 mb-4">
{
  /* <li> */
}
{
  /* <input type="radio" id="used" name="used" value="used" className="speer" required onChange={(e) => { console.log(e.target.checked) }} />
    <label htmlFor="used" className="w-44 py-3 px-16 bg-transparent border border-eggPlant rounded-lg cursor-pointer peer-checked:bg-eggPlant peer-checked:text-white">
        Вживане
    </label>
    </li>
    <li> */
}
{
  /* <input type="radio" id="new" name="new" value="new" className="peer" onChange={(e) => { console.log(e.target.checked) }} />
    <label htmlFor="new" className="w-44 py-3 px-16 bg-transparent border border-eggPlant rounded-lg cursor-pointer peer-checked:bg-eggPlant peer-checked:text-white">
        Нове
    </label>
    </li>
    </ul> */
}
