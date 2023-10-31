import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('should render the input element', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const handleOnChange = jest.fn();
    const toggle = jest.fn();

    render(
      <Input inputRef={inputRef} handleOnChange={handleOnChange} toggle={toggle} />
    );

    const inputElement = screen.getByRole('textbox'); // Use getByRole with "textbox" role

    expect(inputElement).toBeInTheDocument();
  });

  it('should call handleOnChange when input value changes', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const handleOnChange = jest.fn();
    const toggle = jest.fn();

    render(
      <Input inputRef={inputRef} handleOnChange={handleOnChange} toggle={toggle} />
    );

    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'Test Country' } });

    expect(handleOnChange).toHaveBeenCalledWith('Test Country');
  });

  it('should call toggle when input is clicked', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const handleOnChange = jest.fn();
    const toggle = jest.fn();

    render(
      <Input inputRef={inputRef} handleOnChange={handleOnChange} toggle={toggle} />
    );

    const inputElement = screen.getByRole('textbox');

    fireEvent.click(inputElement);

    expect(toggle).toHaveBeenCalled();
  });
});