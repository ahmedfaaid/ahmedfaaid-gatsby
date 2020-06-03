/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const components = {
  h1: ({ children }) => (
    <h1 className='font-heading text-2xl text-secondary text-center my-4'>
      {children}
    </h1>
  ),
  p: ({ children }) => (
    <p className='font-body font-thin text-xl leading-loose tracking-wide'>
      {children}
    </p>
  ),
  pre: props => {
    const { children } = props;
    return (
      <Highlight
        {...defaultProps}
        code={children.props.children}
        language='jsx'
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
