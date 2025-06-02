const ConsultantProfile = require('../models/ConsultantProfile');

exports.findMatches = async (req, res) => {
  try {
    const { skills, domain } = req.body;
    
    const consultants = await ConsultantProfile.find({
      skills: { $in: skills },
      domains: domain,
      availability: true
    })
    .populate('user', 'email')
    .lean();

    const scoredMatches = consultants.map(consultant => {
      const skillMatch = consultant.skills.filter(s => skills.includes(s)).length;
      const domainMatch = consultant.domains.includes(domain) ? 1 : 0;
      const score = (skillMatch * 0.7) + (domainMatch * 0.3);
      
      return {
        ...consultant,
        score,
        explanation: `Matched ${skillMatch} skills and ${domainMatch} domains`
      };
    });

    const topMatches = scoredMatches.sort((a, b) => b.score - a.score).slice(0, 3);
    
    res.json({ success: true, matches: topMatches });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
