import React from "react";
import { Box } from "@chakra-ui/core";
import { SingleStatContainer, StatBar, StatBarWhole } from "src/aboutme/Styles";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

type StatsBarProps = {
  label: string;
  stat: number;
};

const StatsBar: React.FC<StatsBarProps> = ({ label, stat }) => {
  return (
    <>
      <VisibilitySensor>
        {({ isVisible }) => (
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: isVisible ? 1 : 0.3,
            }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            <SingleStatContainer>
              <Box color="Paragraph">{label}</Box>
              <StatBarWhole>
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: isVisible ? 0 : "-100%" }}
                  transition={{ delay: 0, duration: 0.25 }}
                >
                  <StatBar width={stat}>
                    <Box ml="15px">{stat}/100</Box>
                  </StatBar>
                </motion.div>
              </StatBarWhole>
            </SingleStatContainer>
          </motion.div>
        )}
      </VisibilitySensor>
    </>
  );
};

export default StatsBar;
