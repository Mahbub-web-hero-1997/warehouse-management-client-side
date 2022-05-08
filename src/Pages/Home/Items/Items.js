import useItems from '../../UseItem/UseItem';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems()
    console.log(items);
    return (
        <div className='container'>
            <h1 className='fs-1 fw-bold mt-5 mb-4'>Available Items</h1>
            <div className='row gy-4 '>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;