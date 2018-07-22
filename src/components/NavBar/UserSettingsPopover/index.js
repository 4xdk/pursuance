import React from 'react';
import { connect } from 'react-redux';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import ContributionPointsCounter from './ContributionPointsCounter';
import { userLogoutSuccess, siteThemeChange } from '../../../actions';
import './css/UserSettingsPopover.css';

const UserSettingsPopover = ({ username, contributionPoints, userLogoutSuccess, siteThemeChange, themeName }) => (
  <OverlayTrigger
    trigger="click"
    placement="bottom" 
    overlay={(
      <Popover id="user-settings-popopver" title={username} className={ 'theme-' + themeName }>
        <div className='theme-change'>
          Theme: <span className={themeName === 'dark' ? 'active' : ''} onClick={siteThemeChange.bind(this, {themeName: 'dark'})}>dark</span>
          <span className={themeName === 'light' ? 'active' : ''} onClick={siteThemeChange.bind(this, {themeName: 'light'})}>light</span>
        </div>

        <Button bsSize="large" onClick={userLogoutSuccess}>
          Sign out
        </Button>
      </Popover>
    )}>
    <Button bsStyle="link" bsClass="UserSettingsButton">
      <span className="Username">@{username}</span>
      <ContributionPointsCounter contributionPoints={contributionPoints} />
    </Button>
  </OverlayTrigger>
);

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, { userLogoutSuccess, siteThemeChange })(UserSettingsPopover);
