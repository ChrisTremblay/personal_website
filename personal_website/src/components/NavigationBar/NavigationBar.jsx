import './NavigationBar.css';
import { Logo } from '../Logo/Logo';

const searchIcon = (
  <svg viewBox='0 0 100 100' width='100' height='100'>
    <g>
      <path d='M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z' />
    </g>
  </svg>
);

const toggleTheme = (
  <svg viewBox='0 0 100 100' width='100' height='100'>
    <path d='M403.92 403.92c-40.84 40.85-94.38 61.27-147.92 61.27-53.54 0-107.08-20.42-147.92-61.27C67.23 363.08 46.81 309.54 46.81 256c0-53.54 20.42-107.08 61.27-147.92l5.06-5.06 295.84 295.84-5.06 5.06zM324.9 103.47c0-10.25 15.91-10.6 15.91 0v13.38c0 10.28-15.91 10.6-15.91 0v-13.38zm38.52 44.41c8.1 8.1 13.11 19.3 13.11 31.65 0 12.36-5 23.54-13.11 31.64-8.1 8.11-19.28 13.11-31.64 13.11s-23.55-5-31.65-13.11c-8.09-8.1-13.11-19.28-13.11-31.64s5.01-23.55 13.11-31.65c8.1-8.09 19.29-13.11 31.65-13.11 11.91 0 23.22 4.69 31.64 13.11zm-90.28-17.28c-7.41-7.4 3.86-18.62 11.24-11.24L294 129c7.09 7.5-4.11 18.36-11.41 11.06l-9.45-9.46zm-17.42 55.8c-10.41 0-10.41-15.91 0-15.91h13.37c10.43 0 10.42 15.91 0 15.91h-13.37zm27.13 51.76c-7.41 7.41-18.63-3.86-11.24-11.24l9.46-9.46c7.4-7.4 18.63 3.85 11.24 11.24l-9.46 9.46zm55.79 17.42c0 10.41-15.9 10.41-15.9 0v-13.37c0-10.42 15.9-10.42 15.9 0v13.37zm51.93-26.95c7.08 7.49-4.11 18.36-11.4 11.06l-9.63-9.63c-7.08-7.51 4.12-18.36 11.41-11.07l9.62 9.64zm17.26-55.97c10.25 0 10.6 15.9 0 15.9h-13.38c-10.28 0-10.6-15.9 0-15.9h13.38zm-27.13-51.77c7.4-7.4 18.63 3.85 11.24 11.25l-9.46 9.46c-7.4 7.4-18.64-3.85-11.24-11.25l9.46-9.46zM74.98 74.99C124.97 25 190.49 0 256 0s131.03 25 181.01 74.98C487 124.97 512 190.49 512 256s-25 131.03-74.98 181.01C387.03 487 321.51 512 256 512s-131.03-25-181.01-74.98C25 387.03 0 321.51 0 256S25 124.97 74.98 74.99zm15.18 15.16c-45.8 45.8-68.7 105.83-68.7 165.85 0 60.02 22.9 120.05 68.69 165.84 45.8 45.8 105.83 68.7 165.85 68.7 60.02 0 120.05-22.9 165.84-68.69 45.8-45.8 68.7-105.83 68.7-165.85 0-60.02-22.9-120.05-68.69-165.84-45.8-45.8-105.83-68.7-165.85-68.7-60.02 0-120.05 22.9-165.84 68.69zm106.58 165.12c-16.26 7.94-27.95 24.09-29.31 43.44-2.03 28.87 19.73 53.92 48.6 55.95 13.71.96 26.55-3.44 36.48-11.42 4.92-3.95 10-.47 7.86 4.52-11.74 27.36-39.82 45.62-71.2 43.41-39.66-2.79-69.55-37.19-66.76-76.85 2.67-38 34.52-67.14 72.21-66.79 6.94.06 8.42 4.66 2.12 7.74zm1.99 45.82.44.11c.84-3.59 2.94-6.42 6.25-8.47 3.32-2.05 6.77-2.66 10.37-1.81l.1-.44c-3.58-.85-6.41-2.94-8.46-6.25-2.05-3.33-2.66-6.78-1.81-10.36l-.44-.11c-.85 3.59-2.94 6.42-6.26 8.47-3.32 2.05-6.77 2.66-10.37 1.81l-.1.44c3.59.85 6.42 2.94 8.46 6.25 2.07 3.31 2.67 6.77 1.82 10.36zm39.77 23.21.55.13c1.07-4.51 3.69-8.05 7.85-10.63 4.17-2.58 8.51-3.33 13.02-2.27l.13-.55c-4.51-1.06-8.05-3.68-10.63-7.86-2.57-4.17-3.33-8.51-2.27-13.01l-.55-.13c-1.06 4.51-3.68 8.06-7.85 10.64-4.17 2.57-8.5 3.33-13.02 2.26l-.13.55c4.51 1.07 8.06 3.68 10.63 7.85 2.58 4.17 3.34 8.51 2.27 13.02z' />
  </svg>
);
export const NavigationBar = () => {
  return (
    <header>
      <nav>
        <a
          href='#'
          onClick={() => document.body.setAttribute('data-color', 'blue')}
        >
          <Logo />
        </a>
        <ul className='nav-links'>
          <li onClick={() => document.body.setAttribute('data-color', 'coral')}>
            Art
          </li>
          <li onClick={() => document.body.setAttribute('data-color', 'brown')}>
            Dev
          </li>
          <li onClick={() => document.body.setAttribute('data-color', 'teal')}>
            Sport
          </li>
        </ul>
        <div className='nav-buttons'>
          <button className='nav-icon'>{searchIcon}</button>
          <button
            onClick={() => {
              if (document.body.getAttribute('data-mode') == 'dark-mode') {
                document.body.setAttribute('data-mode', 'light-mode');
              } else {
                document.body.setAttribute('data-mode', 'dark-mode');
              }
            }}
            className='nav-icon'
          >
            {toggleTheme}
          </button>
          <select name='lang' id='lang'>
            <option value='fr'>FR</option>
            <option value='en'>EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
};
