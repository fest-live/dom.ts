//
export const cvt_cs_to_os = (pos_in_cs: [number, number], size_in_cs: [number, number], or_i: number = 0): [number, number] => {
    const size_in_os = [...size_in_cs];
    const pos_in_swap: [number, number] = [...pos_in_cs];

    // compute swap
    if (or_i%2) { pos_in_swap.reverse(); size_in_os.reverse(); }

    // compute rotation
    return [
        ((or_i==0 || or_i==3) ? pos_in_swap[0] : (size_in_os[0] - pos_in_swap[0])) || 0,
        ((or_i==0 || or_i==1) ? pos_in_swap[1] : (size_in_os[1] - pos_in_swap[1])) || 0
    ];
};

//
export const cvt_os_to_cs = (pos_in_os: [number, number], size_in_cs: [number, number], or_i: number = 0): [number, number] => {
    const size_in_os = [...size_in_cs];
    const pos_in_cp: [number, number] = [...pos_in_os];

    // use orientation space for size
    if (or_i%2) { size_in_os.reverse(); }

    // back-reversion in orientation space
    const pos_in_cs: [number, number] = [
        ((or_i==0 || or_i==3) ? pos_in_cp[0] : (size_in_os[0] - pos_in_cp[0])) || 0,
        ((or_i==0 || or_i==1) ? pos_in_cp[1] : (size_in_os[1] - pos_in_cp[1])) || 0
    ];

    // back-swap to client-space
    if (or_i%2) { pos_in_cs.reverse(); }
    return pos_in_cs;
};





// for dragging relative (from zero)
export const cvt_rel_cs_to_os = (rel_in_cs: [number, number], or_i: number = 0): [number, number] => {
    const rel_in_swap: [number, number] = [...rel_in_cs];

    // compute swap
    if (or_i%2) { rel_in_swap.reverse(); }

    // compute rotation
    return [
        ((or_i==0 || or_i==3) ? rel_in_swap[0] : -rel_in_swap[0]) || 0,
        ((or_i==0 || or_i==1) ? rel_in_swap[1] : -rel_in_swap[1]) || 0
    ];
};

// for dragging relative (from zero)
export const cvt_rel_os_to_cs = (rel_in_os: [number, number], or_i: number = 0): [number, number] => {
    const rel_in_cp: [number, number] = [...rel_in_os];

    // back-reversion in orientation space
    const pos_in_cs: [number, number] = [
        ((or_i==0 || or_i==3) ? rel_in_cp[0] : -rel_in_cp[0]) || 0,
        ((or_i==0 || or_i==1) ? rel_in_cp[1] : -rel_in_cp[1]) || 0
    ];

    // back-swap to client-space
    if (or_i%2) { pos_in_cs.reverse(); }
    return pos_in_cs;
};
