/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

const components = {
  h1: ({ children }) => (
    <h1 className='font-heading text-2xl text-secondary text-center my-4'>
      {children}
    </h1>
  ),
  p: ({ children }) => (
    <p className='font-body font-thin text-lg leading-loose tracking-wide'>
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
          <div className='overflow-scroll'>
            <pre className={className} style={style}>
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
