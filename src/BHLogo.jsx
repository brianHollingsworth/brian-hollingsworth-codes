import React from 'react';
import PropTypes from 'prop-types';

function BHLogo({ className, stroke, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 700 700" className={className}>
        <title>Signature</title>
        <desc>A signature I created while working at Merrill.</desc>
        <g id="Signature" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
            <path d="M211,227 C179.802278,282.921775 152.07339,326.186033 127.813335,356.792772 C103.55328,387.399511 66.2177324,426.221226 15.8066918,473.257919" id="path-1" stroke={stroke} strokeWidth="23"></path>
            <path d="M15.8066918,473.257919 C106.281582,397.607312 175.249222,344.023267 222.709613,312.505784 C270.170005,280.988302 337.1087,244.319707 423.525698,202.5" id="path-2" stroke={stroke} strokeWidth="23"></path>
            <path d="M423.525698,202.5 C442.984125,225.084586 422.300349,256.09479 361.474369,295.530613 C300.648389,334.966435 219.77107,365.484643 118.842411,387.085235" id="path-3" stroke={stroke} strokeWidth="23"></path>
            <path d="M118.842411,388.561225 C200.07994,386.593239 256.845487,386.593239 289.139053,388.561225 C315.19869,390.149313 360.786124,391.267592 394.451608,406.565923 C396.900631,407.678812 400.915589,411.278836 402.313677,413.984277 C403.424944,416.134691 403.647752,419.928606 402.982103,425.366023" id="path-4" stroke={stroke} strokeWidth="23"></path>
            <path d="M402.982103,425.366023 C397.076589,433.484211 388.351301,441.39232 376.806239,449.09035 C355.417373,463.352043 341.94589,472.209281 319.722473,480.911437 C287.112539,493.680704 246.546473,503.420268 223.90584,507.268043 C193.6057,512.417551 140.585986,516.432652 96.780435,507.268043 C77.2512419,503.182319 50.2599941,491.84561 15.8066918,473.257919" id="path-5" stroke={stroke} strokeWidth="23"></path>
            <path d="M15.8066918,473.257919 L683.5,290.5" id="path-6" stroke={stroke} strokeWidth="23"></path>
            <path d="M529.5,192.868017 L338.5,555.5" id="path-7" stroke={stroke} strokeWidth="23"></path>
            <path d="M657.5,192.868017 L466.5,555.5" id="path-8" stroke={stroke} strokeWidth="23"></path>
        </g>
    </svg>
  );
}

BHLogo.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.string,
};

BHLogo.defaultProps = {
  className: undefined,
  stroke: '#61dafb'
};

export default BHLogo;
