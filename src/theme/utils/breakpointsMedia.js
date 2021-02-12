import theme from '../index';
import { css } from 'styled-components';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoint) {
    const breakpointNames = Object.keys(breakpoints);
    return breakpointNames
      .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
      .map((breakpointName) => css`
      @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `);
  }