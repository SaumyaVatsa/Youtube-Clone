import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const SideBar = ({selectedButton, setSelectedButton}) => {
  return (
    <Stack
        direction="row"
        sx={{
            overflow: 'auto',
            height: {sx: 'auto', md: '95%' },
            flexDirection: { md: 'column'},
        }}
    >
        {categories.map((category)=> (
            <button 
                className='category-btn'
                onClick={()=> setSelectedButton(category.name)}
                style={{
                    background: category.name === selectedButton && '#fc1503',
                    color: '#fff'
                }}
                key={category.name}
            >
                <span style={{
                    color: category.name === selectedButton ? 'white' : 'red',
                    marginRight: '15px'
                }}>
                    {category.icon}
                </span>
                <span style={{opacity: category.name === selectedButton? '1' : '0.8'}}>
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar