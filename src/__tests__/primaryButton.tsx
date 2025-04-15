import {render, screen} from "@testing-library/react"; 
import PrimaryButton from "../components/PrimaryButton";

describe('PrimaryButton()', () => {
    it('should render courrectly', () => {
        render(<PrimaryButton />);
        const element = screen.getByText('Click to Add');
        expect(element).toBeInTheDocument();
    });

    it('should render courrectly with the action type if provided', () => {
        const actionType = 'Post';
        render(<PrimaryButton actionType={actionType} />);
        const element = screen.getByText('Click to ' + actionType);
        expect(element).toBeInTheDocument();
    });
}) 