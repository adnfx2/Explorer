import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToastContainer.module.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Text } from 'components';
import { ToastContainer as ToastWrapper, toast } from 'react-toastify';

const BaseToast = props => {
  const { icon, message, link, onClose } = props;

  return (
    <div className={styles.baseToast}>
      <div className={styles.messageSection}>
        <i className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </i>
        <Text color="white" typeScale="Body" className={styles.message}>
          {message}
        </Text>
      </div>
      <div className={styles.linkSection}>
        <Text
          color="white"
          typeScale="Body"
          link="link"
          className={styles.link}
        >
          {link}
        </Text>
      </div>
    </div>
  );
};

const CloseIcon = props => {
  const { closeToast } = props;

  return (
    <i className={styles.closeIcon}>
      <FontAwesomeIcon icon={['fal', 'times']} />
    </i>
  );
};

BaseToast.propTypes = {
  icon: PropTypes.array,
  message: PropTypes.string,
  link: PropTypes.node,
  onClose: PropTypes.func
};

const ToastContainer = props => {
  return (
    <ToastWrapper
      newestOnTop
      autoClose={false}
      hideProgressBar
      draggable
      closeButton={<CloseIcon />}
    />
  );
};

ToastContainer.BaseToast = BaseToast;

export default ToastContainer;