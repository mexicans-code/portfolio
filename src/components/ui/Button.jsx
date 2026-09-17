export default function Button({ as: Tag = 'a', variant = 'primary', size = '', href, children, ...rest }) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ''}`;
  if (Tag === 'a') {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}