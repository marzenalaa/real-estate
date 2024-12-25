const AboutStats = ({ stat }) => {
  return (
    <div>
      <p className="text-4xl font-medium text-bonusBlue">{stat.number}</p>
      <p className="font-medium text-bitBlack">{stat.text}</p>
    </div>
  );
};

export default AboutStats;
