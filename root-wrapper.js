/* eslint-disable object-curly-newline */
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
  h3: ({ children }) => (
    <h3 className='font-heading text-2xl text-primary text-center my-4'>
      {children}
    </h3>
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
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className='overflow-scroll my-4 md:overflow-hidden min-w-full'>
            <pre
              className={`${className} p-4 float-left md:float-none min-w-full`}
              style={style}
            >
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
  'p.inlineCode': ({ children }) => (
    <code className='bg-dark-5 px-1'>{children}</code>
  ),
  a: props => {
    const { children } = props;
    return (
      <a
        {...props}
        className='text-primary hover:text-secondary border-b border-primary hover:border-secondary'
      >
        {children}
      </a>
    );
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
