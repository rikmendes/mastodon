import PureRenderMixin    from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar             from '../../../components/avatar';
import IconButton         from '../../../components/icon_button';
import DisplayName        from '../../../components/display_name';
import { Link }           from 'react-router';

const NavigationBar = React.createClass({
  propTypes: {
    account: ImmutablePropTypes.map.isRequired
  },

  mixins: [PureRenderMixin],

  render () {
    return (
      <div style={{ padding: '10px', display: 'flex', cursor: 'default' }}>
        <Link to={`/accounts/${this.props.account.get('id')}`} style={{ textDecoration: 'none' }}><Avatar src={this.props.account.get('avatar')} size={40} /></Link>

        <div style={{ flex: '1 1 auto', marginLeft: '8px', color: '#9baec8' }}>
          <strong style={{ fontWeight: '500', display: 'block', color: '#fff' }}>{this.props.account.get('acct')}</strong>
          <a href='/settings/profile' style={{ color: 'inherit', textDecoration: 'none' }}>Settings</a> · <Link to='/statuses/all' style={{ color: 'inherit', textDecoration: 'none' }}>Public timeline</Link> · <a href='/auth/sign_out' data-method='delete' style={{ color: 'inherit', textDecoration: 'none' }}>Logout</a>
        </div>
      </div>
    );
  }

});

export default NavigationBar;
