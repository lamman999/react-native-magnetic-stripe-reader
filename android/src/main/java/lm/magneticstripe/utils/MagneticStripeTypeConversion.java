package lm.magneticstripe.utils;
/**
 * An enumeration of the available converter options.
 *
 * @author Phu Le
 * @date 2020-10-01
 */
public enum MagneticStripeTypeConversion {
    /**
     * The schema is managed and will be created at the appropriate time.
     */
    TRACK(1),

    /**
     * The schema is not managed.
     */
    BANK(2);
    public final int i;

    MagneticStripeTypeConversion(int i) {
        this.i = i;
    }

    public static MagneticStripeTypeConversion valueOfNumber(int number) {
        for (MagneticStripeTypeConversion e : values()) {
            if(number == e.i){
                return e;
            }
        }
        return TRACK;
    }
}
