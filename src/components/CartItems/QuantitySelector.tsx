import { KeyboardArrowDown } from "@mui/icons-material";
import { FormControl, MenuItem, NativeSelect, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface QuantitySelectorProps {
  values: number[];
  deafultValue?: number;
  onChange: (value: number) => void;
}

const CustomSelect = styled(NativeSelect)(({ theme }) => ({
  margin: 0,
  fontSize: "16px",
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.dark["01"],
  "::before": {
    display: "none",
    /*  width: "calc(100% - 24px) !important",
    borderBottomWidth: "1px !important",
    borderBottomColor: `${theme.palette.dark["01"]} !important`,
    left: "4px",
    bottom: "4px", */
  },
  "::after": {
    display: "none",
  },
  "& .MuiNativeSelect-select": {
    padding: "0px",
    paddingRight: "4px",
    zIndex: 2,
    textDecoration: "underline",
    textDecorationThickness: "from-font",
    marginTop: "1.5px",
    marginLeft: "-4px",
  },
  "& .MuiSvgIcon-root": {
    marginLeft: "-33px",
    zIndex: 1,
  },
}));

const CustomOption = styled("option")(({ theme }) => ({
  textAlign: "center",
}));

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  deafultValue,
  values,
  onChange,
}) => {
  function changeQuantityHandler(event: React.ChangeEvent<{ value: unknown }>) {
    const value = event.target.value as number;
    onChange(value);
  }

  return (
    <FormControl
      sx={(theme) => ({
        color: theme.palette.dark["01"],
      })}>
      <CustomSelect
        onChange={changeQuantityHandler}
        defaultValue={deafultValue ?? values[0]}
        inputProps={{
          name: "quantity",
        }}
        IconComponent={() => (
          <KeyboardArrowDown
            sx={(theme) => ({
              color: theme.palette.dark["01"],
              fontSize: "16px",
            })}
          />
        )}>
        {values.map((val) => (
          <CustomOption key={val} value={val}>
            {val}
          </CustomOption>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default QuantitySelector;
