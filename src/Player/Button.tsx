import ButtonUnstyled, {
    ButtonUnstyledOwnerState,
    ButtonUnstyledProps,
} from "@mui/base/ButtonUnstyled";

const Button = function Button(props: ButtonUnstyledProps) {
    return (
        <ButtonUnstyled
            {...props}
            componentsProps={{
                root: (state: ButtonUnstyledOwnerState) => ({
                    className: `hover:text-cyan-500 transition-colors ${
                        state.focusVisible
                            ? "outline-0 ring-2 ring-cyan-500"
                            : ""
                    }`,
                }),
            }}
        />
    );
};

export default Button;
