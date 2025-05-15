interface IArrowLeftProps {
  color?: string;
}

export const ArrowLeft = (props: IArrowLeftProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={65}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || '#000'}
      d="M34.033 15.894 12.252 35.815 10.49 37.5l1.762 1.685 21.781 19.921 3.684-3.369L20.34 39.844h51.41v-4.688H20.34l17.377-15.893-3.684-3.37Z"
    />
  </svg>
)
