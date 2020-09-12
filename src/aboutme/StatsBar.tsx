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
            initial={{ opacity: 0.0 }}
            animate={{
              opacity: isVisible ? 1 : 0.1,
              scale: isVisible ? 1 : 0.95,
            }}
            transition={{ delay: 0, duration: 0.25 }}
          >
            <SingleStatContainer>
              <Box color="Paragraph">{label}</Box>
              <StatBarWhole>
                <StatBar width={stat}>
                  <Box ml="15px">{stat}/100</Box>
                </StatBar>
              </StatBarWhole>
            </SingleStatContainer>
          </motion.div>
        )}
      </VisibilitySensor>
    </>
  );
};

export default StatsBar;
