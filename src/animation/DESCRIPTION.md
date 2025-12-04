**Animation Overview**

- **Loop**: The clip continuously repeats a 3‑phase sequence: Phone-only → Other icons slide in (staggered) → Private key appears (phone adjusts) → Hold → Others slide out → repeat.

**Phase A — Phone Alone (Intro)**

- **Phone layout**: width: `413.3928920035956px`, height: `387.5558248092788px`, angle: `20.81°`, opacity: `1`, position `top: 27px`, `left: -55px`.
- **Behavior**: The phone fades/animates in and rests in this rotated, slightly offset starting pose. This is the clip’s opening moment — nothing else is visible.

**Phase B — Group Entrance (private key excluded)**

- **Phone transition**: As credit/referral/menu/recovery begin their entrances, the phone animates to the mid layout: width `482.1333312988281px`, height `452px`, angle `0°`, position `top: 38px`, `left: -60.4px`.
- **Icon entrance order & timing**:
  - `credit` starts first.
  - After ~120ms, `referral` starts.
  - After another ~120ms, `menu` starts.
  - After another ~120ms, `recovery` starts.
- **Each entrance**: ~0.8s easeOut for slide/fade transitions. During this phase the private key remains hidden.

**Phase C — Private Key & Final Phone Pose**

- **Delay**: Wait 1000ms after the other icons have started/finishing their entrances.
- **Private key**: Slides in from the right with ~0.8s easeOut.
- **Phone transition**: When the private key begins, phone animates to final layout: width `482.1333312988281px`, height `452px`, angle `0°`, position `top: 93px`, `left: -18px`. The phone transition duration is ~0.45s.

**Hold**

- All elements visible together for ~1800ms (configurable).

**Exit (return to only-phone)**

- **Phone**: Returns to the mid layout (`top:38px left:-60.4px`) just before other icons begin exiting to keep continuity.
- **Other icons**: Slide/fade out with ~0.6s durations (credit up, referral down, menu out, recovery fade, private key slides back right).
- **Pause**: Only phone remains visible for ~800ms, then the loop restarts to Phase A.

**Implementation Notes**

- File locations: AnimatedVideo.tsx (sequence), FloatingIcon.tsx (motion image wrapper).
- Use Framer Motion `useAnimation` controls for deterministic sequencing. Controls allow starting animations, awaiting completions, or using delays for staggered timing.
- Numeric values (numbers, not `'px'` strings) are used for `width`, `height`, `top`, `left`, and `rotate` when animating with Framer Motion so the library can interpolate them smoothly.
- Recommendation: For the smoothest, GPU-accelerated motion, convert positional changes from `top/left` to transform `x`/`y` (calculate offsets relative to the container). I can convert those if you want maximum performance.
- Optional tweaks: adjust stagger (120ms), entrance duration (0.8s), private-key delay (currently 1000ms), and hold times to refine rhythm.

DEVELOPER LANGUAGE:

now our phone layout before anything slides in:

width: 413.3928920035956;
height: 387.5558248092788;
angle: 20.81 deg;
opacity: 1;
top: 27px;
left: -55px;

When credit, referral, menu and recovery slides in (NOTE at this point privatekey is not in yet):
width: 482.1333312988281;
height: 452;
angle: 0 deg;
opacity: 1;
top: 38px;
left: -60.4px;

finally when privatekey slides in from right:
width: 482.1333312988281;
height: 452;
angle: 0 deg;
opacity: 1;
top: 93px;
left: -18px;

So these are the phone layouts
delay the privateKey by 1 second, after others come in. also phone has stopped animating
