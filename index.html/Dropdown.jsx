import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const prices = [
  'Below 300',
  '300 - 600',
  '600 - 1000',
  '1000 - 1500',
];
const types = [
  'Roses',
  'Sunflower',
  'Lilies',
  'Orchids',
  'Gerberas',
];
const colors = [
  'Red',
  'Pink',
  'White',
  'Yellow',
  'Purple',
  'Blue',
  'Orange',
  'Others',
];
const arrangements = [
  'Bouquet',
  'Vase',
  'Box',
  'Basket',
];
const stems = [
  '6 Stems',
  '10 Stems',
  '15 Stems',
  '20 Stems',
  '30 Stems',
  '50 Stems',
];

function Price(price, productPrice, theme) {
  return {
    fontWeight:
    productPrice.indexOf(price) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function Flower(type, flowerType, theme) {
  return {
    fontWeight:
    flowerType.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function Colour(color, colorType, theme) {
  return {
    fontWeight:
    colorType.indexOf(color) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function Arrangement(arrangement, productArrangement, theme) {
  return {
    fontWeight:
    productArrangement.indexOf(arrangement) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function Stem(stem, stemNo, theme) {
  return {
    fontWeight:
    stemNo.indexOf(stem) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [productPrice, setProductPrice] = React.useState([]);
  const [flowerType, setFlowerType] = React.useState([]);
  const [colorType, setColorType] = React.useState([]);
  const [productArrangement, setProductArrangement] = React.useState([]);
  const [stemNo, setStemNo] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductPrice(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setFlowerType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setColorType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setProductArrangement(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setStemNo(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <><div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Price</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={productPrice}
          onChange={handleChange}
          input={<OutlinedInput label="Price" />}
          MenuProps={MenuProps}
        >
          {prices.map((price) => (
            <MenuItem
              key={price}
              value={price}
              style={Price(price, productPrice, theme)}
            >
              {price}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div><div>
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-multiple-name-label">Flower Type</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={flowerType}
            onChange={handleChange}
            input={<OutlinedInput label="Flower Type" />}
            MenuProps={MenuProps}
          >
            {types.map((type) => (
              <MenuItem
                key={type}
                value={type}
                style={Flower(type, flowerType, theme)}
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Color</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={colorType}
          onChange={handleChange}
          input={<OutlinedInput label="Color" />}
          MenuProps={MenuProps}
        >
          {colors.map((color) => (
            <MenuItem
              key={color}
              value={color}
              style={Colour(color, colorType, theme)}
            >
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Arrangement</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={productArrangement}
          onChange={handleChange}
          input={<OutlinedInput label="Arrangement" />}
          MenuProps={MenuProps}
        >
          {arrangements.map((arrangement) => (
            <MenuItem
              key={arrangement}
              value={arrangement}
              style={Arrangement(arrangement, productArrangement, theme)}
            >
              {arrangement}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Stems</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={stemNo}
          onChange={handleChange}
          input={<OutlinedInput label="Stems" />}
          MenuProps={MenuProps}
        >
          {stems.map((stem) => (
            <MenuItem
              key={stem}
              value={stem}
              style={Stem(stem, stemNo, theme)}
            >
              {stem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div></>
        
     
  );
}
