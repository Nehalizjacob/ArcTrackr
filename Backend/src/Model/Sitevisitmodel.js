import mongoose from 'mongoose';

const siteVisitSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true,
    },
    batch: {
      type: String,
      required: [true, 'Batch is required'],
      trim: true,
    },
    siteName: {
      type: String,
      required: [true, 'Site name is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    visitDate: {
      type: Date,
      required: [true, 'Visit date is required'],
    },
    status: {
      type: String,
      enum: ['Scheduled', 'Completed'],
      default: 'Scheduled',
      required: [true, 'Visit status is required'],
    },
  },
  { timestamps: true }
);

const SiteVisit = mongoose.model('SiteVisit', siteVisitSchema);
export default SiteVisit;