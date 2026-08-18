export interface PriorityItem {
  id: string;
  title: string;
  category: string;
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  completed: boolean;
  timeEstimate: string;
  impactScore: number;
}

export interface SignalSummaryItem {
  id: string;
  title: string;
  source: 'Customer Feedback' | 'Product Activity' | 'Team Updates';
  count: number;
  snippet: string;
  trend: string;
}

export interface ActivityFeedItem {
  id: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  action: string;
  target: string;
  badge?: string;
}

export const initialPriorities: PriorityItem[] = [
  {
    id: 'p-1',
    title: 'Fix checkout validation before next release',
    category: 'Product Infrastructure',
    urgency: 'HIGH',
    completed: false,
    timeEstimate: '45 mins',
    impactScore: 94,
  },
  {
    id: 'p-2',
    title: 'Review onboarding feedback signals from v2.4 launch',
    category: 'User Experience',
    urgency: 'HIGH',
    completed: false,
    timeEstimate: '20 mins',
    impactScore: 88,
  },
  {
    id: 'p-3',
    title: 'Prepare release notes for engineering sync',
    category: 'Documentation',
    urgency: 'MEDIUM',
    completed: true,
    timeEstimate: '15 mins',
    impactScore: 72,
  },
  {
    id: 'p-4',
    title: 'Sync API error thresholds with SRE alerts',
    category: 'DevOps',
    urgency: 'LOW',
    completed: false,
    timeEstimate: '30 mins',
    impactScore: 65,
  },
];

export const initialSignals: SignalSummaryItem[] = [
  {
    id: 's-1',
    title: 'Checkout Form Error Rate',
    source: 'Customer Feedback',
    count: 7,
    snippet: '7 feedback notes mention payment form validation failure on Mobile Safari.',
    trend: '+12% this week',
  },
  {
    id: 's-2',
    title: 'Onboarding Flow Drop-off',
    source: 'Product Activity',
    count: 14,
    snippet: 'Users report confusion on workspace creation step 3.',
    trend: 'Needs triage',
  },
  {
    id: 's-3',
    title: 'Sprint 14 Release Blockers',
    source: 'Team Updates',
    count: 3,
    snippet: 'Engineering team flagged 3 API deprecation dependencies.',
    trend: 'Resolved 2/3',
  },
];

export const activityFeed: ActivityFeedItem[] = [
  {
    id: 'a-1',
    timestamp: '10m ago',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      role: 'Staff Engineer',
    },
    action: 'flagged priority signal in',
    target: 'Checkout Pipeline',
    badge: 'HIGH',
  },
  {
    id: 'a-2',
    timestamp: '25m ago',
    user: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Product Lead',
    },
    action: 'grouped 8 notes into',
    target: 'Onboarding Feedback Cluster',
  },
  {
    id: 'a-3',
    timestamp: '1h ago',
    user: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      role: 'DevOps Lead',
    },
    action: 'marked complete',
    target: 'Release Notes Automation',
  },
];

export const demoQueryResult = [
  {
    id: 'demo-1',
    urgency: 'HIGH',
    title: 'Checkout validation issue',
    description: 'Payment step throwing uncaught validation error for international card formats.',
    sourceCount: '7 customer reports & 2 crash logs',
    actionText: 'Resolve validation block',
    context: 'Affects 4.2% of mobile checkout attempts during peak hours. Stacktrace points to card expiration regex.',
  },
  {
    id: 'demo-2',
    urgency: 'MEDIUM',
    title: '7 feedback notes mention onboarding confusion',
    description: 'Users report team invite step lacks clear error messaging when email domain matches.',
    sourceCount: '14 user session recordings',
    actionText: 'Update inline validation UI',
    context: 'Drop-off rate increases by 18% when user invites more than 3 members during initial signup.',
  },
  {
    id: 'demo-3',
    urgency: 'LOW',
    title: 'Release documentation needs review',
    description: 'v2.4 API endpoint deprecation notice missing in public developer docs.',
    sourceCount: '1 internal Slack thread',
    actionText: 'Publish doc patch',
    context: 'Deprecation deadline scheduled in 14 days. Draft docs ready in Notion for final sign-off.',
  },
];
