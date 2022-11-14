import NavBar from '../../molecules/NavBar/NavBar'

import './TemplateMain.scss'

const TemplateMain = ({children}) => {
  return (
    <div className={'main-wrapper'}>
      <div className={'max-width-wrapper'}>
      <NavBar/>
      {children}
      </div>
    </div>
  );
};

export default TemplateMain;
