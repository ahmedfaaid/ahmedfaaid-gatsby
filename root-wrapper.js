/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

const components = {
  h2: ({ children }) => (
    <h2 className='font-heading text-2xl text-primary text-center my-4'>
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className='font-body font-thin text-lg text-white leading-relaxed'>
      {children}
    </p>
  ),
  pre: props => {
    const { children } = props;
    return (
      <Highlight
        {...defaultProps}
        code={children.props.children}
        theme={nightOwl}
        language='jsx'
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <div className='overflow-scroll my-4'>
            <pre className={`${className} p-4 float-left`} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    );
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
