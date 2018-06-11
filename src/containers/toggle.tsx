import * as React from "react";
import { Subtract } from "utility-types";

// These props will be subtracted from original component type
export interface InjectedProps {
  count: number;
  onReset: () => void;
  onToggle: () => void;
}

export const toggle = <WrappedProps extends InjectedProps>(
  WrappedComponent: React.ComponentType<WrappedProps> & { name?: string }
) => {
  // These props will be added to original component type
  type HocProps = Subtract<WrappedProps, InjectedProps> & {
    // here you can extend hoc props
    initialCount?: number;
  };
  type HocState = {
    readonly count: number;
  };

  return class WithState extends React.Component<HocProps, HocState> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withState(${WrappedComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = WrappedComponent;

    readonly state: HocState = {
      count: Number(this.props.initialCount) || 0,
    };

    handleIncrement = () => this.setState({ count: this.state.count + 1 });

    handleReset = () => this.setState({ count: Number(this.props.initialCount) || 0 });

    render() {
      const { ...restProps } = this.props as {};
      const { count } = this.state;

      return (
        <WrappedComponent
          {...restProps}
          count={count} // injected
          onToggle={this.handleIncrement} // injected
          onReset={this.handleReset} // injected
        />
      );
    }
  };
};
