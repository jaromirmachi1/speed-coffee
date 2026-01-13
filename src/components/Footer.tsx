import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#BEA791] text-white py-20 relative overflow-hidden footer-full-width min-h-[60vh] flex flex-col">
      {/* Subtle vertical divider lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/10"></div>
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/10"></div>
      </div>

      <div className="w-full px-[100px] relative h-full flex flex-col justify-between min-h-[60vh]">
        {/* Top section - Center brand name */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <div className="text-[128px] md:text-5xl lg:text-[164px] font-agright font-normal text-white tracking-tight leading-tight">
              <div>SPEED</div>
              <div>COFFEE</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row - Fixed at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-0 mt-auto">
          {/* Bottom Left - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-xs md:text-lg font-manrope font-light text-white">
              © {new Date().getFullYear()}
            </p>
          </motion.div>

          {/* Bottom Center - Empty */}
          <div></div>

          {/* Bottom Right - Made by */}
          <motion.div
            className="text-left md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <p className="text-xs md:text-lg font-manrope font-light text-white">
              {t("footer.madeBy")}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
